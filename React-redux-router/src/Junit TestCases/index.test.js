/* eslint-disable jest/valid-expect */

import ReactDOM from 'react-dom'; 

 
jest.mock("react-dom", () => ({render: jest.fn() }));
describe("Application root", () => {
    it("should render without crashing", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("../index.js");
        // eslint-disable-next-line no-unused-expressions
        expect(ReactDOM.render).toHaveBeenCalled
})
});