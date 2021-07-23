import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss'

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
        return 상품.id === parseInt(id)
      });

    return (
        <div className="container">
            <박스>
                <제목 className='red' 색상="blue">Detail</제목>
            </박스>

        <input onChange={(e)=> {setInputData(e.target.value)}} />
        { InputData }

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
            } }>주문하기</button> 
            <button className="btn btn-danger" onClick={()=> {
                history.push('/')
            }}>뒤로가기</button> 
          </div>
        </div>
  </div> 
    )
}



const Info = (props) => {
  return (
    <p>재고 :{props.Stock[0]} </p>
  );
};


export default Detail