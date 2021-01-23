import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-white-200 hover:text-green-200 text-4xl font-bold cursive tracking-widest">
                        DevPes
                    </NavLink>
                    <NavLink to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-gray-100"
                        activeClassName="text-blue-700 bg-green-400"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-yelow-800"
                        activeClassName="text-blue-700 bg-green-400"
                    >  
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-yelow-800"
                        activeClassName="text-blue-700 bg-green-400"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon url="https://twitter.com/pesdesigner" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />

                        <SocialIcon url="https://www.linkedin.com/in/paulo-eduardo-47646596/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />

                        <SocialIcon url="https://github.com/pesdesigner/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}