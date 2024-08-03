export default function Projects({ title, description, image }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} />
    </>
  );
}
