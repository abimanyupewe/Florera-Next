"use client";
import { blogAssets } from "@/assets/blog/blogAssets";
import { courseDetailDummyData } from "@/assets/course/dataCourse";
import { documentationData } from "@/assets/documentation/docAssets";
import {
  productsCard,
  productsDetailDummyData,
} from "@/assets/product/dataProducts";
import { teamAssets } from "@/assets/teams/teamAssets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppFloreraContent = createContext();
export const useAppFloreraContent = () => {
  return useContext(AppFloreraContent);
};

export const AppFloreraContentProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_CODE;
  const currencySymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL;

  const router = useRouter();

  const [isSeller, setIsSeller] = useState(true);
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teams, setTeams] = useState([]);
  const [documentations, setDocumentation] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const fetchProductData = async () => {
    setProducts(productsDetailDummyData);
  };

  // const fetchUserData = async () => {
  //     setUserData(userDummyData)
  // }

  const fetchCourseData = async () => {
    setCourses(courseDetailDummyData);
  };

  const fetchTeamData = async () => {
    setTeams(teamAssets);
  };

  const fetchDocumentationData = async () => {
    setDocumentation(documentationData);
  };

  const fetchBlogData = async () => {
    setBlogs(blogAssets);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    fetchCourseData();
  }, []);

  useEffect(() => {
    fetchTeamData();
  }, []);

  useEffect(() => {
    fetchDocumentationData();
  }, []);

  useEffect(() => {
    fetchBlogData();
    // Debug output
    console.log("Blog data loaded:", blogAssets);
  }, []);

  // useEffect(() => {
  //     fetchUserData()
  // }, [])

  const value = {
    currency,
    currencySymbol,
    router,
    isSeller,
    setIsSeller,
    products,
    setProducts,
    fetchProductData,
    courses,
    setCourses,
    fetchCourseData,
    teams,
    setTeams,
    fetchTeamData,
    documentations,
    setDocumentation,
    fetchDocumentationData,
    blogs,
    setBlogs,
    fetchBlogData,
  };

  return (
    <AppFloreraContent.Provider value={value}>
      {props.children}
    </AppFloreraContent.Provider>
  );
};
