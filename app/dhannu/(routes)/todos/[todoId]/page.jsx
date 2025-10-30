"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { todoId } = useParams();
  console.log(todoId);
  return (
    <div>
      <h1>todo</h1>
    </div>
  );
}
