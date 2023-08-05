import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleCard from '../components/ArticleCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';

const Home = () => {

    const articles = useSelector(state=>state.articles)

    return(
        <main>
                <Row xs={1} md={2} lg={3}>
                    <Col md={4} lg={3} >
                        Listado de categorias
                    </Col>
                    <Col md={8} lg={9} >
                        Lista de productos
                        <Row>
                            <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <button type="button" class="btn btn-dark">Search</button>
                            </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} mg={2} lg={3}>
                            {
                                articles?.map(item=> (
                                    <Col key={item.id}>
                                        <ArticleCard/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            
        </main>
    )
}

export default Home