import DogList from "./DogList";
import { Layout} from 'antd';
import React, { useEffect, useState } from "react";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height:"100%",
  backgroundColor: '#659DBD',
};
const contentStyle = {
  textAlign: 'center',
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

const Main = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then(res => res.json())
      .then(
        (result) => {
          setDogs(result);
        }
      )
  }, [])

  return (
    <Layout>
      <Header style={headerStyle}>
        <div>
          <h1>Dog Project</h1>
        </div>
      </Header>
        <Content style={contentStyle}>
          <DogList dogs={dogs}/>
        </Content>
      <Footer style={footerStyle}></Footer>
    </Layout> 
  );
  
}

export default Main;