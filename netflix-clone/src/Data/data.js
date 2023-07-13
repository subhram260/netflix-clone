const video_list = [
  {
    id: 1,
    title: "React Course",
    view_count: "100k",
    time: "1 year ago",
  },
  {
    id: 2,
    title: "Python Course",
    view_count: "1M",
    time: "6 month ago",
  },
  {
    id: 3,
    title: "Java Course",
    view_count: "500k",
    time: "april 25",
  },
  {
    id: 4,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 5,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 6,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 7,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 8,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 9,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 10,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 11,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
  {
    id: 12,
    title: "Web Course",
    view_count: "10k",
    time: "6 hours ago",
  },
];

export default video_list;

fetch("https://api.themoviedb.org/3/movie/343611?api_key=ac77efd44d78f5eceb2373f0992a48f8")
  .then((apidata) => apidata.json())
  .then((json) => console.log(json));
