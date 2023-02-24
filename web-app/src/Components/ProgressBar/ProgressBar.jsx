import React, {useState, useContext, useEffect} from "react";
import { FaStar } from "react-icons/fa";
import './progressBar.css'
import { ChartDataContext } from "../../helper/requireAuth";
import { ProgressBarComp } from "./progressBarComponent/ProgressBarComp";

const ProgressBar = () => {
  const glbData = useContext(ChartDataContext);
  const [deliveryProgress, setDeliveryProgress] = useState(0);
  const [cancelledProgress, setCancelledProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  console.log(glbData);

    const data = {
        rating: glbData.total_rating
    }
    // for deliveryProgress
    const delivery = glbData.total_orders;

    // for cancelledProgress
    const cancelled = glbData.total_orders;

    // for progress
    const inProgress = glbData.total_orders;

    useEffect(() => {

      setDeliveryProgress(delivery);
      setCancelledProgress(cancelled);
      setProgress(inProgress);

      return () => {
        // clean-up function
        setDeliveryProgress(null);
        setCancelledProgress(null);
        setProgress(null);
      }
    }, [])

  return (
    <div className="progress-section">
      <div className="progress">
        <ProgressBarComp progress={deliveryProgress} label='Delivered' color="var(--primary)" />
        <ProgressBarComp progress={progress} label='In Progress' color="green" />
        <ProgressBarComp progress={cancelledProgress} label='Cancelled' color="red" />
      </div>
      <div className="progress-rating">
        <h3>Your Rating</h3>
        <h1>{data.rating} <FaStar style={{fontSize: '16px'}} /></h1>
      </div>
    </div>
  );
};

export default ProgressBar;
