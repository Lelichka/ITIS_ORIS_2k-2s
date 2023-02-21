
import { Card,Layout} from 'antd';
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
const { Header, Footer, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height:"100%",
  backgroundColor: '#659DBD',
};
const contentStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection:"column",
  justifyContent:'center',
  alignItems:"center",
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#659DBD',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#659DBD',
};



const DogPage = () => {
  const params = useParams();
  const [imageId,setImageId] = useState(params.imageId)
  const [breedId, setBreedId] = useState(1);
  const [breedImageUrl, setBreedImageUrl] = useState("");

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const buttonStyle = {
    display: "inline-block",
    color: "white",
    fontWeight: "700",
    padding: "2px 40px",
    borderRadius: "50%",
    textDecoration: "none",
  userSelect: "none",
  outline: "none",
    backgroundColor: isHover ? "#FBEEC1" : "#fff",
    color: isHover ? "#fff" : "#659DBD",
  };
  

  useEffect(() => {
    fetch(
      `https://api.thedogapi.com/v1/images/${imageId}`
    )
      .then((response) => response.json())
      .then((data) =>{
        setBreedImageUrl(data.url);
        setBreedId(data.breeds[0].id)
      } );
  },[]);

  const [breed, setBreed] = useState({
    name: "",
    weight: {metric:""},
    height: {metric:""},
    life_span: "",
  });

  useEffect(() => {
    fetch(
      `https://api.thedogapi.com/v1/breeds/${breedId}`
    )
      .then((response) => response.json())
      .then((data) => setBreed(data));
  },[breedId]);

  return (
      <>
      <Layout>
        <Header style={headerStyle}>
            <div>
                <h1>Dog Project</h1>
            </div>
            
        </Header> 
        <Content style={contentStyle}>
          <span  style={{lineHeight: "40px", marginLeft:"30px",alignSelf: "flex-start"}}><Link to="/" style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Back to breed list</Link></span>
          <Card
            hoverable
            style={{
                width: 500,
            }}
            cover={
                <img style={{
                    weight: 500,
                    objectFit: "contain",
                    padding:"20px 20px 0px"
                }} alt="dog" src={breedImageUrl}/>
            }
            >
            <Card.Meta style={{backgroundColor:"#fff"}} title={<strong>Main breed featuress</strong>} />
            <p align='left'>
                <strong >Name: </strong>
                {breed.name}
            </p>
            <p align='left'>
                <strong>Weight: </strong>
                {breed.weight.metric}
            </p>
            <p align='left'>
                <strong>Height: </strong>
                {breed.height.metric}
            </p>
            <p align='left'>
                <strong>Life span: </strong>
                {breed.life_span}
            </p>
          </Card>
        </Content>
        <Footer style={footerStyle}></Footer>
      </Layout>
      </>
    )
  
}




export default DogPage;