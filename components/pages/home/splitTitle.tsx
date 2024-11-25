import React, { FunctionComponent } from "react";
import styles from "@styles/components/pages/home/splittitle.module.css";
import { CDNImage } from "@components/cdn/image";
import Typography from "../../UI/typography/typography";
import { TEXT_TYPE } from "@constants/typography";

type SplitTitleProps = {
  className?: string;
};

const SplitTitle: FunctionComponent<SplitTitleProps> = ({
  className
}) => {
  let earn = (
    <svg width="135.264" height="35.328" viewBox="0 0 135.264 35.328" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <g id="og" strokeLinecap="round" fillRule="nonzero" fontSize="9pt" strokeWidth="0">
              <path d="M 7.68 35.328 L 0 35.328 L 0 0.288 L 7.68 0.288 L 7.68 35.328 Z M 22.032 35.328 L 6.72 35.328 L 6.72 28.8 L 22.032 28.8 L 22.032 35.328 Z M 21.696 6.816 L 6.72 6.816 L 6.72 0.288 L 21.696 0.288 L 21.696 6.816 Z M 20.928 20.784 L 6.72 20.784 L 6.72 14.256 L 20.928 14.256 L 20.928 20.784 Z" id="0" vectorEffect="non-scaling-stroke"/>
              <path d="M 33.072 35.328 L 25.2 35.328 L 36.768 0.288 L 49.488 0.288 L 61.488 35.328 L 53.328 35.328 L 43.632 5.712 L 46.128 6.72 L 39.936 6.72 L 42.528 5.712 L 33.072 35.328 Z M 52.56 26.64 L 33.984 26.64 L 36.384 20.112 L 50.112 20.112 L 52.56 26.64 Z" id="1" vectorEffect="non-scaling-stroke"/>
              <path d="M 79.824 24.096 L 71.808 24.096 L 71.808 17.904 L 80.448 17.904 A 7.227 7.227 0 0 0 81.944 17.756 A 5.47 5.47 0 0 0 83.448 17.208 Q 84.72 16.512 85.416 15.24 A 5.635 5.635 0 0 0 86.043 13.304 A 7.273 7.273 0 0 0 86.112 12.288 A 6.87 6.87 0 0 0 85.941 10.722 A 5.459 5.459 0 0 0 85.416 9.336 Q 84.72 8.064 83.448 7.368 Q 82.176 6.672 80.448 6.672 L 71.808 6.672 L 71.808 0 L 79.824 0 Q 83.962 0 87.066 1.185 A 14.765 14.765 0 0 1 87.408 1.32 A 11.689 11.689 0 0 1 90.31 3.004 A 9.85 9.85 0 0 1 92.352 5.232 A 9.888 9.888 0 0 1 93.749 8.573 Q 94.08 10.038 94.08 11.76 L 94.08 12.528 A 14.256 14.256 0 0 1 93.813 15.364 Q 93.436 17.219 92.53 18.674 A 8.854 8.854 0 0 1 92.328 18.984 A 10.193 10.193 0 0 1 88.439 22.349 A 12.781 12.781 0 0 1 87.384 22.824 Q 84.392 24.017 80.365 24.091 A 29.252 29.252 0 0 1 79.824 24.096 Z M 73.92 35.328 L 66.048 35.328 L 66.048 0 L 73.92 0 L 73.92 35.328 Z M 96.432 35.328 L 87.312 35.328 L 77.04 20.256 L 85.68 20.256 L 96.432 35.328 Z" id="2" vectorEffect="non-scaling-stroke"/>
              <path d="M 108.384 35.328 L 101.088 35.328 L 101.088 0.288 L 114 0.288 L 127.2 28.944 L 128.832 28.944 L 127.872 29.808 L 127.872 0.288 L 135.264 0.288 L 135.264 35.328 L 122.256 35.328 L 109.056 6.672 L 107.424 6.672 L 108.384 5.808 L 108.384 35.328 Z" id="3" vectorEffect="non-scaling-stroke"/>
          </g>
      </defs>
    
      <use href="#og" clipPath="path('M 0.0,0.0 L 0.0,11.88 L 53.63,4.44 L 35.36,0.0 L 0.0,0.0 z')" data-c="20.21,4.66" />
      <use href="#og" clipPath="path('M 0.0,11.88 L 0.0,26.28 L 32.37,30.27 L 71.93,8.9 L 53.63,4.44 L 0.0,11.88 z')" data-c="31.0,16.78" />
      <use href="#og" clipPath="path('M 71.93,8.9 L 88.4,0.0 L 85.68,0.0 L 53.63,4.44 L 71.93,8.9 z')" data-c="71.54,4.3" />
      <use href="#og" clipPath="path('M 85.68,0.0 L 35.36,0.0 L 53.63,4.44 L 85.68,0.0 z')" data-c="58.22,1.48" />
      <use href="#og" clipPath="path('M 0.0,26.28 L 0.0,36.0 L 21.76,36.0 L 32.37,30.27 L 0.0,26.28 z')" data-c="12.85,31.77" />
      <use href="#og" clipPath="path('M 21.76,36.0 L 78.88,36.0 L 32.37,30.27 L 21.76,36.0 z')" data-c="44.34,34.09" />
      <use href="#og" clipPath="path('M 78.88,36.0 L 87.04,36.0 L 122.41,21.17 L 71.93,8.9 L 32.37,30.27 L 78.88,36.0 z')" data-c="77.35,23.85" />
      <use href="#og" clipPath="path('M 122.41,21.17 L 136.0,15.48 L 136.0,0.0 L 88.4,0.0 L 71.93,8.9 L 122.41,21.17 z')" data-c="109.95,8.67" />
      <use href="#og" clipPath="path('M 87.04,36.0 L 136.0,36.0 L 136.0,24.48 L 122.41,21.17 L 87.04,36.0 z')" data-c="118.05,30.38" />
      <use href="#og" clipPath="path('M 136.0,24.48 L 136.0,15.48 L 122.41,21.17 L 136.0,24.48 z')" data-c="131.47,20.38" />
    </svg>
  )

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {earn}     
    </div>
  );
};
export default SplitTitle;
