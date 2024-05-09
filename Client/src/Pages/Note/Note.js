import './Note.css'
import Navbar from "../../Components/Navbar/Navbar";
import Button from '../../Components/Button'
import Fetching from '../../Components/Fetchning-Form/fetch'



export default function Note() {

    return (
        <>



            <Navbar />
            <div className="head">
                <h2>To-Do List</h2>
                <a href='/Todo'>  <button>+</button></a>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Created-By</th>
                        <th>Created-Date</th>
                        <th>Deadline</th>
                        <th>Prograss</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-column="First Name">James</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Job Title">Chief Sandwich Eater</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Twitter"><Button className="Edit" name="Edit" /></td>
                        <td data-column="Last Name"><Button className="Delete" name="Delete" /></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">Andor</td>
                        <td data-column="Last Name">Nagy</td>
                        <td data-column="Job Title">Designer</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Twitter"><Button className="Edit" name="Edit" /></td>
                        <td data-column="Last Name"><Button className="Delete" name="Delete" /></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">Tamas</td>
                        <td data-column="Last Name">Biro</td>
                        <td data-column="Job Title">Game Tester</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Twitter"><Button className="Edit" name="Edit" /></td>
                        <td data-column="Last Name"><Button className="Delete" name="Delete" /></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">Zoli</td>
                        <td data-column="Last Name">Mastah</td>
                        <td data-column="Job Title">Developer</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Twitter"><Button className="Edit" name="Edit" /></td>
                        <td data-column="Last Name"><Button className="Delete" name="Delete" /></td>
                    </tr>
                    <tr>
                        <td data-column="First Name">Szabi</td>
                        <td data-column="Last Name">Nagy</td>
                        <td data-column="Job Title">Chief Sandwich Eater</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Last Name">Matman</td>
                        <td data-column="Twitter"><Button className="Edit" name="Edit" /></td>
                        <td data-column="Last Name"><Button className="Delete" name="Delete" /></td>
                    </tr>
                </tbody>
            </table>
            <Fetching/>
        </>
    )
}

