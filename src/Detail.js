import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap';
import './Detail.scss'
import {stockContext} from './App.js'
import { CSSTransition } from "react-transition-group"
import { connect } from 'react-redux'; //해야함 스테이스 쓰려면




let 박스 = styled.div`
    padding : 20px;
`

let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`

// class Detail2 extends React.Component {
//   componentDidMount(){
//     //Detail2 컴포넌트가 Mount 되고나서 실행할 코드
//   }
//   componentWillUnmount(){
//     //Detail2 컴포넌트가 Unmount 되기전에 실행할 코드
//   }
// }

function Detail(props) {

  const [Alert, setAlert] = useState(true)
  const [InputData, setInputData] = useState('')
  const [Tab, setTab] = useState(0)
  const [TabSwitch, setTabSwitch] = useState(false)



  const stock = useContext(stockContext)

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      setAlert(false)
    }, 2000);
    console.log('안녕');
    return () => {
      clearTimeout(타이머)
      // unMound 될때 실행됨  // 사라질때
    } 
    
  }, [])

    let { id } = useParams()
    let history = useHistory()
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
      });

    return (
        <div className="container">
            <박스>
                <제목 className='red' 색상="blue">Detail</제목>
            </박스>

        <input onChange={(e)=> {setInputData(e.target.value)}} />
        { InputData }
        {stock}

        {
          Alert === true
          ?
          <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
          : null
        }





        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (찾은상품.id +1) +'.jpg'} width="100%" alt=""/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>


            <Info Stock={props.Stock}/>



            <button className="btn btn-danger" onClick={ ()=> {
              props.setStock([9,10,11])


              props.dispatch({type : '항목추가', 데이터 : {id: 찾은상품.id, name: 찾은상품.title, qty: 1 }  })
              history.push('/cart')

            } }>주문하기</button> 
            <button className="btn btn-danger" onClick={()=> {
                history.push('/')
            }}>뒤로가기</button> 
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{ setTabSwitch(false); setTab(0)}} >Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{ setTabSwitch(false); setTab(1)}} >Option 2</Nav.Link>
          </Nav.Item>

        </Nav>

     
        <CSSTransition in={TabSwitch} classNames="wow" timeout={500}>
          <TabContent Tab={Tab} setTabSwitch={setTabSwitch}/>
        </CSSTransition>






  </div> 
    )
}



function TabContent(props){

  useEffect(()=> {
    props.setTabSwitch(true)
  })

 if (props.Tab === 0) {
  return <div>0번째 내용입니</div>
 } else if (props.Tab === 1) {
  return <div>1번째 내용입니</div>
 } else if (props.Tab === 2) {
  return <div>2번째 내용입니</div>
 }

}






const Info = (props) => {
  return (
    <p>재고 :{props.Stock[0]} </p>
  );
};




function state를props화(state){
  return {
      state: state.reducer,
      isOpenAlert : state.reducer2
  }
}


export default connect(state를props화)(Detail);


