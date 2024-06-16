// Interfaces are particularly useful for defining contracts within your code 
// and ensuring that classes or objects adhere to these contracts.
interface Customer {
    id: number,
    email: string,
    getDiscount(discCode: string): number
}

// Suppose an interface is already made but you want to add something to it
// then we can reopen the interface
interface Customer {
    username: string // Now the Customer interface has a new property
}

const customerObj: Customer = {
    id: 1001,
    username: "zainahmed1713",
    email: "zainahmed1713@gmail.com",
    getDiscount: (code: "10PercentOff") => {
        return 10;
    }
}

// We can also use inheritance in interfaces
interface Student {
    studentID: number,
    studentName: string,
    studentEmail: string
}

interface teacherAssistant extends Student { // teacherAssistant interface inherits Student's Properties
    assistantOf?: string, // Used optional properties as not all students are teacher assistants
    stipend?: number
}

const myStudent: teacherAssistant = {
    studentID: 23,
    studentName: 'Zain',
    studentEmail: 'z@z.com',
    assistantOf: 'Prof. Robert Langdon',
    stipend: 10000
}


