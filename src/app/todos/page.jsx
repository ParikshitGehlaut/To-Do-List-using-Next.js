"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const page = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, []);
  const deleteTodo = (title) => {
    let newTodos = todos.filter((item) => {
      return item.title != title;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const editTodo = () => {};

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              TODOS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your Todos will show up here.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {todos.map((item) => {
              return (
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={`https://picsum.photos/600/900?a=${item.title}`}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mb-4">{item.desc}</p>
                      <span className="inline-flex gap-2">
                        <a
                          className="text-gray-500 cursor-pointer"
                          onClick={() => {
                            deleteTodo(item.title);
                          }}
                        >
                          <Image
                            src="/delete.svg"
                            alt=""
                            height={30}
                            width={30}
                          />
                        </a>
                        <a
                          className="text-gray-500 cursor-pointer"
                          onClick={editTodo}
                        >
                          <Image
                            src="/edit.svg"
                            alt=""
                            height={30}
                            width={30}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
