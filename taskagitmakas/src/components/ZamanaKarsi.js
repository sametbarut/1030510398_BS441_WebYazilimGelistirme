import React, {useEffect, useState} from 'react'
import './oyun.css'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'
import modal from "bootstrap/js/src/modal";


    function Game() {

        const gameArr = [rock, paper, scissors]
        const [srcPlayer, setSrcPlayer] = useState(rock)
        const [srcComputer, setSrcComputer] = useState(rock)
        const [status, setStatus] = useState('Oyun Başladı...')
        const [playerCounter, setPlayerCounter] = useState(0)
        const [computerCounter, setcComputerCounter] = useState(0)


        const rockBtn = (props) => {
            setSrcPlayer(rock)
            let i = Math.floor(Math.random() * 3)
            setSrcComputer(gameArr[i])
            if (gameArr[i] === rock) {
                setStatus('Berabere')
            }
            if (gameArr[i] === paper) {
                setStatus('Kaybettin')
                setcComputerCounter(computerCounter + 1)
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
                setcComputerCounter(computerCounter + 1)
            }
        }
        const scissorsBtn = () => {
            setSrcPlayer(scissors)
            let i = Math.floor(Math.random() * 3)
            setSrcComputer(gameArr[i])
            if (gameArr[i] === rock) {
                setStatus('Kaybettin')
                setcComputerCounter(computerCounter + 1)
            }
            if (gameArr[i] === paper) {
                setStatus('Kazandın')
                setPlayerCounter(playerCounter + 1)
            }
            if (gameArr[i] === scissors) {
                setStatus('Berabere')
            }
        }

        function durum() {
            if (playerCounter>computerCounter){
                const skor=playerCounter-computerCounter;
                const mdurum="Puan farkkla öndesin"
            } else {
                const skor=computerCounter-playerCounter;
                const mdurum="Puan farkla geridesin"
            }
        }

        return (

            <div className='game'>
                <div className='top'>
                    <div className='computer'>
                        <p>Bilgisayar</p>
                        <p className='score'>
                            <strong className='red'>{computerCounter}</strong>
                        </p>
                    </div>
                    <h1 className='header'>
                        {' '}
                        <strong>{status}</strong>{' '}
                        <h1>Skorun: {playerCounter} ve Bilgisayarın Skoru:{computerCounter}
                            <br/>
                            Genel Skor: {playerCounter-computerCounter}
                        </h1>
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
                    <CountdownTimer seconds={5}/>
                    <img src={srcPlayer} alt='rock' className={`el2`}/>

                </div>
                <div className='bottom'>
                    <img
                        width='200px'
                        className='tas'
                        src='tas.png'
                        alt='rock'
                        onClick={rockBtn}
                    />
                    <img
                        width='200px'
                        className='kagit'
                        src='kagit.png'
                        alt='rock'
                        onClick={paperBtn}
                    />
                    <img
                        width='200px'
                        className='makas'
                        src='makas.png'
                        alt='rock'
                        onClick={scissorsBtn}
                    />
                </div>
            </div>
        )
    }
function CountdownTimer({seconds}) {
        const [timeLeft, setTimeLeft] = useState(seconds);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }, [timeLeft]);

        useEffect((props) => {
            if (timeLeft === -1) {
                alert("Zaman Dolduuu!!! Oyun Yeniden Başlatılacak.")
                window.location='/ZamanaKarsi';
            }
        }, [timeLeft]);

        return (
            <div>
                <h2>Kalan Süre: {timeLeft} Saniye</h2>
            </div>
        );
    }


export default Game
