import './App.css';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	
	let [글제목] = useState(['윤석열 당선','박보영 유키즈 출연','한동훈 법무장관']);
	let [날짜] = useState(['2월 17일','3월 25일','5월 16일']);
	let [상세내용] = useState(['윤석열은 제20대 대통령이다.','박보영의 일기장이 공개되었다.','한동훈은 윤석열의 오른팔이다.']);
	let [따봉, 따봉변경] = useState([0,0,0]);
	let [modal, setModal] = useState(false);
	let [index, setIndex] = useState(0);

	let [fashion] = useState(data);

	return (
		<div className="App">

{/* git init
git add .
git status
git config --global user.email "ju1@upleat.com" (첫번째 후 생략)
git config --global user.name "ju1" (첫번째 후 생략)
git commit -m "first commit"
git remote add origin https://github.com/upleatPKO/johnny.git (첫번째 후 생략)
git branch -M main (첫번째 후 생략)
git push -u origin main
git branch issue1 
git clone https://github.com/upleatPKO/ju1.git */}
		

			<div className="black-nav">
				<h4>ReactBlog</h4>
			</div>

			<div className="Nav_bar">
				<h1>Fashion</h1>
				<a href="Home">Home</a>
				<a href="Cart">Cart</a>
			</div>

			{
				글제목.map(function(v,i){
					return (
						<div className="list" key={i}>
							<h4>{ 글제목[i] } <button type="button" onClick={()=>{
								let copy = [...따봉];
								copy[i] += 1;
								따봉변경(copy);
							}}>👍</button> <span className="good">{ 따봉[i] }</span></h4>
							<p>{ 날짜[i] } 발행</p>
							<p>{ 상세내용[i] }</p>
							<div className="switch">
								<input type="checkbox" id={ 'chk'+i } className="switch_inp" onClick={(e)=>{ 
									( (e.target.checked == true) ? setModal(true) : setModal(false) )
									setIndex(i);
								}} />
								<label htmlFor={ 'chk'+i } className="switch_lbl"></label>
							</div>
						</div>
					)
				})
			}


			{
				(modal == true) ? <Modal setModal={setModal} setIndex={setIndex} index={index} 글제목={글제목} 날짜={날짜} 상세내용={상세내용} modal={modal} /> : null
			}


			<div className="align_c">
				<img src={process.env.PUBLIC_URL + '/pby.jpg'} alt="" />
			</div>

			<div className="fashions">
				{/* <div className="fashions_item">
					<img src={process.env.PUBLIC_URL + '/fashion1.jpg'} alt="" />
					<h4>{fashion[0].title}</h4>
					<p>{fashion[0].content}</p>
					<p>{fashion[1].price} 원</p>
				</div>
				<div className="fashions_item">
					<img src={process.env.PUBLIC_URL + '/fashion2.jpg'} alt="" />
					<h4>{fashion[1].title}</h4>
					<p>{fashion[1].content}</p>
					<p>{fashion[1].price} 원</p>
				</div>
				<div className="fashions_item">
					<img src={process.env.PUBLIC_URL + '/fashion3.jpg'} alt="" />
					<h4>{fashion[2].title}</h4>
					<p>{fashion[2].content}</p>
					<p>{fashion[2].price} 원</p>
				</div> */}
				
				{
					fashion.map(function(v,i){
						return (
							<div className="fashions_item">
								<img src={process.env.PUBLIC_URL + '/fashion'+ (i+1) +'.jpg'} alt="" />
								<h4>{fashion[i].title}</h4>
								<p>{fashion[i].content}</p>
								<p>{fashion[i].price} 원</p>
							</div>
						)
					})
				}
			</div>

			{/* <div className="list">
				<h4>{ 글제목[0] }</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4>{ 글제목[1] }</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4>{ 글제목[2] }</h4>
				<p>2월 17일 발행</p>
			</div> */}
		

		</div>
	);
}

function Modal(props){
	return (
		<div className="modal_wrap">
			<div className="modal_dim"></div>
			<div className="modal">
				<h4>{props.글제목[props.index]}</h4>
				<p>{props.날짜[props.index]}</p>
				<p>{props.상세내용[props.index]}</p>
				<div className="modal_btn">
					<button type="button" onClick={()=>{
						props.setModal(false);
						console.log(!props.modal);
						
					}}>확인</button>
				</div>
			</div>
		</div>
	)
}

export default App;
