"use client";
import { fetchAwardCategoryThunk } from "@/src/hook/awardCategories/awardCategoryThunk";
import { setCurrentAwardCategory } from "@/src/hook/awardCategories/AwardCategoriesSlice";
import { AppDispatch, RootState } from "@/src/hook/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetNominationAwards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allAwardCategories, currentAwardCategory, isLoading } = useSelector(
    (state: RootState) => state.awardCategories,
  );
  const searchParams = useSearchParams();
  const awardId = searchParams?.get("id");
  console.log("awardId", awardId);

  useEffect(() => {
    if (awardId && currentAwardCategory?._id !== awardId) {
      const found = allAwardCategories.find((cat) => cat._id === awardId);
      if (found) {
        dispatch(setCurrentAwardCategory(found));
      } else if (!isLoading) {
        dispatch(fetchAwardCategoryThunk(awardId));
      }
    }
  }, [currentAwardCategory?._id, awardId, allAwardCategories, isLoading, dispatch]);

  return null;
};

export default GetNominationAwards
