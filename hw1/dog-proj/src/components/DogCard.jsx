import { Card } from 'antd';
const { Meta } = Card;
const DogCard = ({dog}) => (
  <Card
    hoverable
    style={{
      width: 300,
      height:300,
      backgroundColor:"#fff",
      
    }}
    cover={<img style={{objectFit:"contain", height:230, padding:"20px 15px 0px"}} alt="example"  src={dog.image.url} />}
    bodyStyle={{backgroundColor: "#fff" }}
    
  >
    <Meta style={{backgroundColor:"#fff"}} title={dog.name}  />
  </Card>
);
export default DogCard;