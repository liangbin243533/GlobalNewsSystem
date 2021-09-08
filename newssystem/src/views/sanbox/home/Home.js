import React from "react";
import { Button } from "antd";
import axios from "axios";

export default function Home() {
  const ajax = () => {
    // axios.post("http://localhost:8000/posts").then(res=>{
    //     console.log(res.data)
    // })
    axios.put("http://localhost:8000/posts/2", {
      title: "Yes",
    });
  };

  return (
    <div>
      <Button type="primary" onClick={ajax}>
        Button
      </Button>
    </div>
  );
}
