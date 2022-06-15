import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 15px 20px;
  background-color: #3e3e7c;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "./login.css";
// // import axios from "axios";
// const Register = () => {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const generateError = err =>
//     toast.error(err, {
//       position: "bottom-right",
//     });

//   const handleSubmit = async e => {
//     e.preventDefault();

//     // try {
//     //   const { data } = await axios.post(
//     //     "http://localhost:4000/register",
//     //     {
//     //       ...values,
//     //     },
//     //     {
//     //       withCredentials: true,
//     //     }
//     //   );

//     //   if (data) {
//     //     if (data.errors) {
//     //       const { email, password } = data.errors;
//     //       if (email) {
//     //         generateError(email);
//     //       } else if (password) {
//     //         generateError(password);
//     //       }
//     //     }
//     //   } else {
//     //   }
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };
//   return (
//     <div className="container">
//       <h1 className="p-4">Registration Account</h1>
//       <form onSubmit={e => handleSubmit(e)}>
//         <div>
//           <label htmlFor="email">Email Id</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             onChange={e =>
//               setValues({ ...values, [e.target.name]: e.target.value })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={e =>
//               setValues({ ...values, [e.target.name]: e.target.value })
//             }
//           />
//         </div>
//         <div></div>
//         <button type="submit">Submit</button>
//         <span>
//           Already have an account? <Link to={"/login"}>Login</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;
