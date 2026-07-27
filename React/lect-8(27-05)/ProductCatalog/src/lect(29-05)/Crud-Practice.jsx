import React, { useState } from "react";

function CrudPractice() {
    const [student, setStudent] = useState({
        sname: "",
        email: "",
        contact: "",
    });

    const [studentList, setStudentList] = useState([]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value,
        });
    };

    // Add student
    const handleSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
            id: Date.now(),
            ...student,
        };

        setStudentList([...studentList, newStudent]);

        // Clear input fields
        setStudent({
            sname: "",
            email: "",
            contact: "",
        });
    };

    // Delete student
    const handleDelete = (id) => {
        const updatedList = studentList.filter(
            (student) => student.id !== id
        );

        setStudentList(updatedList);
    };

    return (
        <div>
            <fieldset>
                <legend>Add Information</legend>

                <form onSubmit={handleSubmit}>
                    <label>Enter Student Name : </label>
                    <input
                        type="text"
                        name="sname"
                        placeholder="Enter student name"
                        value={student.sname}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label>Enter Student Email : </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter student email"
                        value={student.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label>Enter Student Contact : </label>
                    <input
                        type="text"
                        name="contact"
                        placeholder="Enter student contact"
                        value={student.contact}
                        onChange={handleChange}
                    />
                    <br />
                    <br />

                    <input type="submit" value="Add" />
                </form>

                <br />

                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentList.length > 0 ? (
                            studentList.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.sname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No Data Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}

export default CrudPractice;