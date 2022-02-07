import styles from "./search_header.module.css";
import React, { useRef } from 'react';

const Search_header = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
    };

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <a href="#"><h1 className={styles.title}>Youtube</h1></a>
            </div>
            <input className={styles.input} ref={inputRef} type="search" placeholder="Search" onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg}  src="/images/search.png" alt="search" />
            </button>
        </header>
    )
};


export default Search_header;