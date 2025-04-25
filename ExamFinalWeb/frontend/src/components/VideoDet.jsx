import React from "react";
import { getData } from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments, { CommentsDummyData } from "./Comments";


const VideoDet = () => {
  const { _id } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        fetchVideo();
  }, []);
    const fetchVideo = async () => {
      try {
        const data = await getData(`/video/${_id}`);
        setVideo(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch videos');
        setLoading(false);
      }
    };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {video && (
            <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
            <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <p className="mt-4">{video.description}</p>
            </div>
        )}
        <Comments comments={CommentsDummyData} />
    </div>
  );
}

export default VideoDet;