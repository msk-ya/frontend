
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from '../App';
import New from '../users/New';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../store/Store';


Enzyme.configure({adapter: new Adapter()});

let container = null;
beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('Top表示', ()=>{
  it("topページ表示される", () => {
    act(() => {
      render(<Provider store={store}><App /></Provider>, container);
    });
    let userTitle = container.querySelector("[data-testid='usertitle']")
    expect(userTitle.textContent).toBe("会員一覧");
  });
});
describe('新規ユーザー登録表示', ()=>{
  it("新規ページ表示", () => {
      let component = shallow(<New.WrappedComponent />);
     expect(component.find("[data-testid='userNewtitle']").text()).toBe('新規会員登録');
  });
});
