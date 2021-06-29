import useSWR from 'swr';

export default function Page1() {
    const { data, error } = useSWR('/api/test');

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    return (
      <div>
        <h1 className="text-center">{data.title}</h1>
      </div>
    );
}

Page1.auth = true;
