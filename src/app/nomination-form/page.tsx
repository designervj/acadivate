"use client";

import GetAllNominationAwards from "@/src/components/forms/Nomination/GetAllNominationAwards";
import NominationForm from "@/src/components/forms/Nomination/NominationForm";
import { setCurrentAwardCategory } from "@/src/hook/awardCategories/AwardCategoriesSlice";
import { useAppDispatch } from "@/src/hook/hooks";
import { AppDispatch, RootState } from "@/src/hook/store";
import Script from "next/script";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const dispatch= useDispatch<AppDispatch>()
  const {allAwardCategories, currentAwardCategory} = useSelector((state: RootState) => state.awardCategories)
  useEffect(()=>{
    if(!currentAwardCategory&&
         allAwardCategories?.length){
        dispatch(setCurrentAwardCategory(allAwardCategories[0]))
      }
  },[allAwardCategories, currentAwardCategory, dispatch])
  return (
    <div>
      <NominationForm />
      <GetAllNominationAwards/>``
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
    </div>
  );
};

export default page;
