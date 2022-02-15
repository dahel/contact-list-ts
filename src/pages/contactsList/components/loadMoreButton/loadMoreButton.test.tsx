import renderer from 'react-test-renderer';
import LoadMoreButton from './LoadMoreButton';

describe('LoadMoreButton component', () => {
  test(`renders properly in case 'loading' prop is true`, () => {
    const component = renderer.create(<LoadMoreButton loading={true} onClick={() => {}} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test(`renders properly in case 'loading' prop is false`, () => {
    const component = renderer.create(<LoadMoreButton loading={false} onClick={() => {}} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test(`calls 'onClick' callback passed as prop`, () => {
    const onClick = jest.fn();
    const root = renderer.create(<LoadMoreButton loading={false} onClick={onClick} />).root;

    root.props.onClick();

    expect(onClick).toHaveBeenCalledWith();
  });
});
