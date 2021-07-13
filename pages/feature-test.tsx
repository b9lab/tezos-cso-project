import React from "react";
import Button from "../src/components/Button";
import ChartWrapper from "../src/components/ChartWrapper";
import Input from "../src/components/Input";

export default function Page() {
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    };
    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ];
    
    return (
        <div>
            <div className="my-4">
                <h1 className="">Tezos CSO Platform Headline Text</h1>
                <div className="body-text-large">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </div>
            </div>
            <Button handler={() => {}} color="accent-1" outline>CTA Button 1</Button>

            <div className="my-4">
                <h2>Subheadline H2</h2>
                <div>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </div>
            </div>

            <div className="my-4">
                <h2 className="highlight">Subheadline H2 with highlight</h2>
                <div>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </div>
            </div>

            <div className="my-4">
                <h2 className="mb-4">Form Input</h2>
                <Input value="Text input text" handler={() => {}} label="Fieldname"/>
            </div>

            <h2 className="my-4">Buttons</h2>
            <div className="flex justify-between">
                <Button handler={() => {}} color="accent-1">CTA Button 1</Button>
                <Button handler={() => {}} outline>Cancel Button</Button>
                <Button handler={() => {}} color="accent-2">CTA Button 2</Button>
            </div>

            <h2 className="my-4">Charts</h2>
            <ChartWrapper options={options} series={series} type="bar"/>
        </div>
    );
}