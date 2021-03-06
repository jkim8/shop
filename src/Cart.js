import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

const Cart = (props) => {
    
    return (
        <div>
            <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a,i)=> {
                            return (
                                <tr key={a.id}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.qty}</td>
                                    <td>
                                        <button onClick={()=> { props.dispatch({type : '수량증가', payload : a.id}) }} >+</button>
                                        <button onClick={()=> { props.dispatch({type : '수량감소', payload : a.id}) }} >-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

    
                </tbody>
            </Table>
            {
                props.isOpenAlert === true 
                ? (
                    <div className="my-alert2" >
                        <p>지금 구매하시면 신규 20%할인</p>
                        <button onClick={()=>{props.dispatch({type : 'alertClose'})} } >닫기</button>
                    </div>
                )
                : null

            }

            <Parent 이름="존박3" 나이="23"/>
        </div>
    );
};





function Parent(props){
    return (
      <div>
        <Child1 이름={props.이름}/>
        <Child2 나이={props.나이}/> 
      </div>
    )
  }
  function Child1(){
    useEffect( ()=>{ console.log('렌더링됨1') } );
    return <div>1111</div>
  }
  const Child2 = memo(()=>{
    useEffect( ()=>{ console.log('렌더링됨2') } );
    return <div>2222</div>
  })








function state를props화(state){
    return {
        state: state.reducer,
        isOpenAlert : state.reducer2
    }
}


export default connect(state를props화)(Cart);