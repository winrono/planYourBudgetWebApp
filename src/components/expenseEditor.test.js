const rewire = require("rewire")
const expenseEditor = rewire("./expenseEditor")
const ExpenseEditor = expenseEditor.__get__("ExpenseEditor")

const mapStateToProps = expenseEditor.__get__("mapStateToProps")
const mapDispatchToProps = expenseEditor.__get__("mapDispatchToProps")
// @ponicode
describe("onSave", () => {
    let inst

    beforeEach(() => {
        inst = new ExpenseEditor(987650, "DROP TABLE tmp;")
    })

    test("0", async () => {
        await inst.onSave()
    })
})

// @ponicode
describe("componentWillReceiveProps", () => {
    let inst

    beforeEach(() => {
        inst = new ExpenseEditor(56784, "DROP TABLE tmp;")
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ expense: { createdDateTime: 241 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ expense: { createdDateTime: 127 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ expense: { createdDateTime: 159 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ expense: { createdDateTime: 243 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps({ expense: { createdDateTime: 161 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ expenses: { expenseEditorOpen: true }, authorize: { user: { uuid: "6372ddce-22e2-45a1-92c7-e8d7ae758f7b" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ expenses: { expenseEditorOpen: true }, authorize: { user: { uuid: "d854efed-89e6-476c-878e-ea785e5f62d0" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ expenses: { expenseEditorOpen: false }, authorize: { user: { uuid: "4e2845e3-4586-451e-894d-d703e72f8dac" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ expenses: { expenseEditorOpen: true }, authorize: { user: { uuid: "a383f6d5-d249-4714-9cb0-aaae89895ee8" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ expenses: { expenseEditorOpen: false }, authorize: { user: { uuid: "6372ddce-22e2-45a1-92c7-e8d7ae758f7b" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapDispatchToProps("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapDispatchToProps(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
