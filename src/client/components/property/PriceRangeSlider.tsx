import React, { useState, useEffect, useRef } from 'react';

interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  onMinimumPriceSent: (price: number) => void;
  onMaximumPriceSent: (price: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ minPrice, maxPrice, onMinimumPriceSent, onMaximumPriceSent }) => {
  const [minimumPrice, setMinimumPrice] = useState(minPrice);
  const [maximumPrice, setMaximumPrice] = useState(maxPrice);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingThumb, setDraggingThumb] = useState<'left' | 'right' | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLDivElement>(null);
  const thumbLeftRef = useRef<HTMLDivElement>(null);
  const thumbRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMinimumPrice(minPrice);
    setMaximumPrice(maxPrice);
    updateRange();
  }, [minPrice, maxPrice]);

  const startDrag = (event: React.MouseEvent<HTMLDivElement>, thumb: 'left' | 'right'): void => {
    setIsDragging(true);
    setDraggingThumb(thumb);
    event.preventDefault();
  };

  const onMouseMove = (event: MouseEvent): void => {
    if (isDragging && draggingThumb) {
      const sliderRect = sliderRef.current?.getBoundingClientRect();
      if (!sliderRect) return;

      const minValue = minPrice; // real minPrice from api
      const maxValue = maxPrice; // real maxPrice from api

      let newLeftPercent = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
      if (draggingThumb === 'left') {
        if (newLeftPercent < 0) newLeftPercent = 0;
        if (newLeftPercent > ((maximumPrice - minValue) / (maxValue - minValue)) * 100) {
          newLeftPercent = ((maximumPrice - minValue) / (maxValue - minValue)) * 100;
        }
        const newMinPrice = Math.round((newLeftPercent / 100) * (maxValue - minValue) + minValue);
        setMinimumPrice(newMinPrice);
        onMinimumPriceSent(newMinPrice);
      } else if (draggingThumb === 'right') {
        if (newLeftPercent > 100) newLeftPercent = 100;
        if (newLeftPercent < ((minimumPrice - minValue) / (maxValue - minValue)) * 100) {
          newLeftPercent = ((minimumPrice - minValue) / (maxValue - minValue)) * 100;
        }
        const newMaxPrice = Math.round((newLeftPercent / 100) * (maxValue - minValue) + minValue);
        setMaximumPrice(newMaxPrice);
        onMaximumPriceSent(newMaxPrice);
      }
      updateRange();
    }
  };

  const onMouseUp = (): void => {
    setIsDragging(false);
    setDraggingThumb(null);
  };

  const updateRange = (): void => {
    const minValue = minPrice;
    const maxValue = maxPrice;
    const minPercent = ((minimumPrice - minValue) / (maxValue - minValue)) * 100;
    const maxPercent = ((maximumPrice - minValue) / (maxValue - minValue)) * 100;
    if (thumbLeftRef.current && thumbRightRef.current && rangeRef.current) {
      thumbLeftRef.current.style.left = `${minPercent}%`;
      thumbRightRef.current.style.left = `${maxPercent}%`;
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, draggingThumb, minimumPrice, maximumPrice]);

  return (
    <div className="slider-container pr-3">
      <div className="slider mt-4 mb-2" ref={sliderRef}>
        <div className="slider-track"></div>
        <div className="slider-range" ref={rangeRef}></div>
        <div
          className="slider-thumb slider-thumb-left"
          ref={thumbLeftRef}
          onMouseDown={(e) => startDrag(e, 'left')}
        ></div>
        <div
          className="slider-thumb slider-thumb-right"
          ref={thumbRightRef}
          onMouseDown={(e) => startDrag(e, 'right')}
        ></div>
      </div>
      <div className="flex items-center justify-between font-medium">
        <h1>{minimumPrice}</h1>
        <h1>{maximumPrice}</h1>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
