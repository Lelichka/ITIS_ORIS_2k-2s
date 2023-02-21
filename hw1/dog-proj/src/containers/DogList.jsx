import { Col, Row} from 'antd';
import DogCard from "../components/DogCard"
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
    return (
        <Row gutter={[24, 24]} justify="center">
              {
                  dogs.map((dog)=> <Link key={dog.id} to={`/breeds/${dog.image.id}`}><Col span={5}><DogCard dog={dog}/></Col></Link>)
              }
        </Row>        
    )
}
export default DogList;

