import { Link, withRouter } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, CardBody, Col, Container, Form, Label, Row, Input, FormFeedback, Alert } from "reactstrap";

import logo from "../../assets/images/uilogo.png";
import { postJwtLogin } from "../../helpers/auth";
import useHandleErrors from "../../hooks/useHandleErrors";


function Login(){
    const [error, errors, checkError] = useHandleErrors()
    const validation = useFormik({
        enableReinitialize: true,
    
        initialValues: {
          username: "demo@demo.com" || '',
          password: '123456',
        },
        validationSchema: Yup.object({
          username: Yup.string().required("Username required"),
          password: Yup.string().required("Password required"),
        }),
        onSubmit: async (values) => {
          try{
            //const response = await postJwtLogin(values)
            if(1===1){ //response.success
              //localStorage.setItem("escuelafrontend", JSON.stringify(response));
              localStorage.setItem("escuelafrontend", JSON.stringify({"success":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiQWRtaW4iLCJhY3RpdmUiOnRydWUsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxK203NHVqWUt4Tm5VenlHWnQrQmhEL0ZnbENxVDVJUUVzPSIsInVzZXJuYW1lIjoiYWRtaW4iLCJkZWxldGUiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTAxVDAwOjM4OjM2LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTAxVDAwOjM4OjM2LjAwMFoiLCJyb2xlX2lkIjoxLCJSb2xlIjp7ImlkIjoxLCJuYW1lIjoiQURNSU5JU1RSQURPUiIsImRlbGV0ZSI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjItMTItMDFUMDA6Mzg6MTIuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMTItMDFUMDA6Mzg6MTIuMDAwWiJ9fSwiaWF0IjoxNjczOTg0MjYzLCJleHAiOjE2NzM5OTUwNjN9.650ylVFXwsMPVpcNbx6AcTMZ2kFGYG_SYlVAs0xmTTE"}));
              window.location.href="/"
              //history.push("/dashboard");
            }            
          }catch(error){
            console.log('error')
            console.log(error)
            if(error.response){
              checkError(error.response.data)
            }
          }
        }
      });
    
    return (
        <div className="account-pages my-5 pt-sm-5">
            <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <div className="text-center mb-4">
                <img
                    src={logo}
                    alt=""
                    className="rounded-circle"
                    height="150"
                  />
                </div>
                <Card className="overflow-hidden">                  
                  <CardBody className="pt-0">                    
                    <div className="p-2 py-5">
                      <Form
                        className="form-horizontal"
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >         

                        {error && <Alert color="danger">{error.msg}</Alert>}
                        {errors.length > 0 && 
                        <Alert color="danger">
                          {
                            errors.map((item, index)=>(
                              <div key={index}>{item.param} - {item.msg}</div>
                            ))
                          }
                        </Alert> }              
  
                        <div className="mb-3">
                          <Label className="form-label">Correo electr??nico</Label>
                          <Input
                            name="username"
                            className="form-control"
                            placeholder="Enter email"
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.username || ""}
                            invalid={
                              validation.touched.username && validation.errors.username ? true : false
                            }
                          />
                          {validation.touched.username && validation.errors.username ? (
                            <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label className="form-label">Contrase??a</Label>
                          <Input
                            name="password"
                            value={validation.values.password || ""}
                            type="password"
                            placeholder="Enter Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.password && validation.errors.password ? true : false
                            }
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                          ) : null}
                        </div>
  
                        <div className="mt-3 d-grid">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Ingresar
                          </button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    ?? {new Date().getFullYear()} Universidad Intercontinental. Creado con {" "}
                    <i className="mdi mdi-heart text-danger" /> por ATC-G
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default withRouter(Login)