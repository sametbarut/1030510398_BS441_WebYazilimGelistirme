import React, {createContext, useEffect, useState} from 'react'
import '../styles/oyun.css'
import rock from '../images/rock.png'
import paper from '../images/paper.png'
import scissors from '../images/scissors.png'
import tas from '../images/tas.png'
import kagit from '../images/kagit.png'
import makas from '../images/makas.png'
import {Alert} from "react-bootstrap";
import {CountdownTimer} from "./CountdownTimer";

    function Game() {
        const gameArr = [rock, paper, scissors]
        const [srcPlayer, setSrcPlayer] = useState(rock)
        const [srcComputer, setSrcComputer] = useState(rock)
        const [status, setStatus] = useState('Oyun Başladı...')
        const [playerCounter, setPlayerCounter] = useState(0)
        const [computerCounter, setComputerCounter] = useState(0)

        const rockBtn = (props) => {
            setSrcPlayer(rock)
            let i = Math.floor(Math.random() * 3)
            setSrcComputer(gameArr[i])
            if (gameArr[i] === rock) {
                setStatus('Berabere')
            }
            if (gameArr[i] === paper) {
                setStatus('Kaybettin')
                setComputerCounter(computerCounter + 1)
            }
            if (gameArr[i] === scissors) {
                setStatus('Kazandın')
                setPlayerCounter(playerCounter + 1)
            }
        }
        const paperBtn = () => {
            setSrcPlayer(paper)
            let i = Math.floor(Math.random() * 3)
            setSrcComputer(gameArr[i])
            if (gameArr[i] === rock) {
                setStatus('Kazandın ')
                setPlayerCounter(playerCounter + 1)
            }
            if (gameArr[i] === paper) {
                setStatus('Berabere')
            }
            if (gameArr[i] === scissors) {
                setStatus('Kaybettin')
                setComputerCounter(computerCounter + 1)
            }
        }
        const scissorsBtn = () => {
            setSrcPlayer(scissors)
            let i = Math.floor(Math.random() * 3)
            setSrcComputer(gameArr[i])
            if (gameArr[i] === rock) {
                setStatus('Kaybettin')
                setComputerCounter(computerCounter + 1)
            }
            if (gameArr[i] === paper) {
                setStatus('Kazandın')
                setPlayerCounter(playerCounter + 1)
            }
            if (gameArr[i] === scissors) {
                setStatus('Berabere')
            }
        }

        function Sonuc(){
            if (playerCounter>computerCounter){
                return(
                    <h2>
                        <Alert variant="success" className="my-alert">
                            Senin skorun: {playerCounter} Bilgisayarın Skoru: {computerCounter} <br/>
                            Total Skor: {playerCounter-computerCounter}
                        </Alert>
                    </h2>
                )
            } else if (playerCounter<computerCounter){
                return (
                    <h2>
                        <Alert variant="danger">
                            Senin skorun: {playerCounter} Bilgisayarın Skoru: {computerCounter} <br/>
                            Total Skor: {playerCounter-computerCounter}
                        </Alert>
                    </h2>
                )
            } else if (playerCounter===computerCounter){
                return (
                    <h2>
                        <Alert variant="warning">
                            Senin skorun: {playerCounter} Bilgisayarın Skoru: {computerCounter} <br/>
                            Total Skor: {playerCounter-computerCounter}
                        </Alert>
                    </h2>
                )
            }
        }

        return (
            <div>
            <div className='game'>
                <div className='top'>
                    <div className='computer'>
                        <p>Bilgisayar</p>
                        <p className='score'>
                            <strong className='red'>{computerCounter}</strong>
                        </p>
                    </div>
                    <h1 className='header'>
                        <strong>{status}</strong>{' '}
                        <Sonuc/>
                    </h1>
                    <div className='player'>
                        <p>Oyuncu</p>
                        <p className='score'>
                            <strong className='red'> {playerCounter}</strong>
                        </p>
                    </div>
                </div>
                <div className='middle'>
                    <img src={srcComputer} alt='rock' className={`el`}/>
                    <CountdownTimer seconds={10}/>
                    <img src={srcPlayer} alt='rock' className={`el2`}/>

                </div>
                <div className='bottom'>
                    <img
                        width='200px'
                        className='tas'
                        src={tas}
                        alt='rock'
                        onClick={rockBtn}
                    />
                    <img
                        width='200px'
                        className='kagit'
                        src={kagit}
                        alt='paper'
                        onClick={paperBtn}
                    />
                    <img
                        width='200px'
                        className='makas'
                        src={makas}
                        alt='scissors'
                        onClick={scissorsBtn}
                    />
                </div>
            </div>
            </div>
        )
    }

export default Game
