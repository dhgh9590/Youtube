import React from 'react';
import styles from "./aside.module.css";

const Aside = (props) => {
    return(
        <aside className={styles.aside}>
            <ul>
              <li><a href="#"><em><i className="fas fa-home"></i>홈</em></a></li>
              <li><a href="#"><em><i className="fab fa-500px"></i>탐색</em></a></li>
              <li><a href="#"><em><i className="far fa-address-card"></i>구독</em></a></li>
            </ul>
            <ul>
              <li><a href="#"><em><i className="fab fa-buffer"></i>보관함</em></a></li>
              <li><a href="#"><em><i className="fas fa-camera-retro"></i>시청기록</em></a></li>
              <li><a href="#"><em><i className="fas fa-caret-square-right"></i>내동영상</em></a></li>
              <li><a href="#"><em><i className="fas fa-clock"></i>나중에 볼 동영상</em></a></li>
              <li><a href="#"><em><i className="far fa-thumbs-up"></i>좋아요 표시한 동영상</em></a></li>
            </ul>
            <ul>
                <li><a href="#"><em><i className="fas fa-film"></i>영화</em></a></li>
                <li><a href="#"><em><i className="fas fa-gamepad"></i>게임</em></a></li>
                <li><a href="#"><em><i className="fas fa-satellite-dish"></i>실시간</em></a></li>
                <li><a href="#"><em><i className="far fa-lightbulb"></i>학습</em></a></li>
                <li><a href="#"><em><i className="fas fa-running"></i>스포츠</em></a></li>
            </ul>
            <ul>
                <li><a href="#"><em><i className="fas fa-cog"></i>설정</em></a></li>
                <li><a href="#"><em><i className="far fa-flag"></i>신고 기록</em></a></li>
                <li><a href="#"><em><i className="far fa-question-circle"></i>고객센터</em></a></li>
                <li><a href="#"><em><i className="fas fa-gavel"></i>의견 보내기</em></a></li>
            </ul>
        </aside>
    );
            
};

export default Aside;