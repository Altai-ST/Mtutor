import { Nav } from "react-bootstrap";
import { bindActionCreators } from "redux";

const Add = () => {
    // let title = prompt('Which')

    // switch (action.type) {
    //     case 1:
    //         <Nav className="mr-auto">
    //             <Nav.Link href="#home">Главная</Nav.Link>
    //             <Nav.Link href="#searchTutor">Найти репетитора</Nav.Link>
    //         </Nav>
    //         break
    //     case 5:
    //         <Nav className="mr-auto">
    //         <Nav.Link href="#home">Мой календарь</Nav.Link>
    //         <Nav.Link href="#searchTutor">Мои курсы</Nav.Link>
    //         <Nav.Link href="#searchTutor">Мои студенты</Nav.Link>
    //     </Nav> 
    //     break   
    // }

    return (
        <>
            <button onClick={() =>  { let pr = prompt('Which') 
             switch (pr) {
                case 1:
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#searchTutor">Найти репетитора</Nav.Link>
                    </Nav>
                    break
                case 5:
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Мой календарь</Nav.Link>
                    <Nav.Link href="#searchTutor">Мои курсы</Nav.Link>
                    <Nav.Link href="#searchTutor">Мои студенты</Nav.Link>
                </Nav> 
                break   
            }
        
        
            }}>hello</button>

        </>
    )

}

export default Add;