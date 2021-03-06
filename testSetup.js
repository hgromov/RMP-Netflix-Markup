/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

console.error = (message) => {
  throw new Error(message);
};
