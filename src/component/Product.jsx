import React from "react";
import styled from "styled-components";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  cursor: pointer;
  z-index: 3;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  :hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  transition: all 0.7s ease;

  :hover {
    background: #3e3e7c;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  // const navigate = useNavigate();
  // const handlesubmit = () => {
  //   // <Navigate to={"/product"} state={{ item }} />;
  //   navigate("/product", { item });
  //   // console.log("triggered");
  // };
  // console.log(item);
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingBagOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
