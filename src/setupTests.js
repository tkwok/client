import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

// for Jest to find and execute before running any test by default
Enzyme.configure({ adapter: new Adapter() });
