import React from "react";
import "./widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const Widget = ({type}) => {
  let data;

    //temporary
    const amount = 100
    const diff = 20
  

    switch(type){
      case "customers":
        data={
          title:"Customers",
          isMoney: false,
          link:"See all users",
          icon:
            <PersonIcon className="icon"/>, 
          
        };
        break;
        case "order":
        data={
          title:"Orders",
          isMoney: false,
          link:"View all orders",
          icon:
            <ShoppingCartIcon className="icon"/>, 
          
        };
        break;
        case "earning":
        data={
          title:"Earning",
          isMoney: true,
          link:"View all earnings",
          icon:
            <MonetizationOnIcon className="icon"/>, 
          
        };
        break;
        case "balance":
          data={
            title:"Balance",
            isMoney: true,
            link:"See details",
            icon:
              <AccountBalanceWalletIcon className="icon"/>, 
            
          };
          break;
        default:
          break;
    }




  return (
      <div className="widget-page">

      <div className="widget">
            <div className="left">
              <span className="title">{data.title}</span>
              <span className="counter">{data.isMoney && "$"} {amount} </span>
              <span className="link">{data.link}</span>
            </div>
            <div className="right">
              <div className="percentage ">
              <ArrowUpwardIcon/>
                {diff} %
                </div>
                {data.icon}
              </div>
      </div>

      </div>
  );
};

export default Widget;
  