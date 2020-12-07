import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TitleSection from './TitleSection';
import TabSection from './TabSection';
import {ReactComponent as RefreshIcon} from '../../src/assets/refresh.svg';
import { refreshTitles,setInputProps } from "../stores/UserActions.js";

import './TabContent.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    //   maxWidth: 500,
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto',
        '& > *': {
            margin: theme.spacing(0.5),
          },
    },
    title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }
}));


export const TabContent  = (props) => {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setInputProps(props));
      }, [props]);

    return (
        <div className='tab-content-container'>
            {props.titleRefreshAll === true && 
                <div className='refresh-icon' onClick={() => dispatch(refreshTitles())}>
                    <RefreshIcon />
                </div>
            }
            <Card className='title-container'>
                <TitleSection/>
            </Card>
            <Card className='tab-container'>
                <TabSection/>
            </Card>
        </div>
    );
}