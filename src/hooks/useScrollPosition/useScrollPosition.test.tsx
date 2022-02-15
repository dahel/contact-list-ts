import { renderHook } from '@testing-library/react-hooks';
import useScrollPositionHook from './useScrollPosition';

describe('useScrollPositionHook hook', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    Object.assign(window, { scrollY: 200 });
  });

  test('calls window.scrollTo', () => {
    renderHook(() => useScrollPositionHook());

    expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
  });

  test('calls window.scrollTo with new value in case saveScrollPosition was called after window.scrollY changes', () => {
    const hook = renderHook(() => useScrollPositionHook(), {
      initialProps: false,
    });
    const [saveScrollPosition] = hook.result.current;

    Object.assign(window, { scrollY: 500 });

    saveScrollPosition();

    const promise = hook.waitForNextUpdate().then(() => {
      expect(window.scrollTo).toHaveBeenCalledWith(0, 500);
    });

    hook.rerender(true);

    return promise;
  });

  test('calls window.scrollTo with old value in case saveScrollPosition was not called after window.scrollY changes', () => {
    const hook = renderHook(() => useScrollPositionHook(), {
      initialProps: false,
    });

    Object.assign(window, { scrollY: 500 });

    const promise = hook.waitForNextUpdate().then(() => {
      expect(window.scrollTo).toHaveBeenCalledWith(0, 200);
    });

    hook.rerender(true);

    return promise;
  });
});
