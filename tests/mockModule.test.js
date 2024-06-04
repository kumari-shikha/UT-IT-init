const testModule = require("./testModule");

const spy1 = jest.spyOn(testModule, 'printFn');

const mockImp = jest.fn(() => { 
    return "mocked implementation"
})

const mockedPrintFn = spy1.mockImplementation(mockImp)

it("Mock test 1", () => {
    const msg = mockedPrintFn();
    expect(msg).toBe("mocked implementation")
})

// spy1.mockRestore();
console.log(testModule.printFn());


// const spy2 = jest.spyOn(testModule, 'printFn');
// it("Mock test 2", () => {
//     const msg = testModule.printFn(2,5);
//     expect(msg).toBe("original implementation")
// })


