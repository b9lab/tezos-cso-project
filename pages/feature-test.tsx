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
            <div className="pt-32 pb-8 px-8 bg-gradient-to-b from-white to-gray-300">
                <h1 className="mb-8">Tezos CSO Platform</h1>
                <div className="body-text-large">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </div>
            </div>

            <div className="bg-gradient-to-b from-white to-gray-100 px-8">
                <div className="pt-20 flex justify-between">
                    <img src="https://via.placeholder.com/200x100"/>
                    <div className="ml-8">
                        <h2 className="mb-8">This is a second headline</h2>
                        <div>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                </div>

                <div className="pt-20 flex justify-between">
                    <div className="ml-8">
                        <h2 className="mb-8  highlight">This is yet a second headline, highlighted</h2>
                        <div>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                    <img src="https://via.placeholder.com/200x100"/>
                </div>

                <div className="pt-20 flex justify-between">
                    <div>
                        <h3 className="mb-8 text-center">Lefthandside Column</h3>
                        <div className="indent">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                    <div className="ml-8">
                        <h3 className="mb-8 text-center">Center Column</h3>
                        <div className="indent">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                    <div className="ml-8">
                        <h3 className="mb-8 text-center">Righthandside Column</h3>
                        <div className="indent">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                </div>

                <div className="pt-20">
                    <h2 className="mb-8 text-center">This is a full-width Headline2 section</h2>
                    <div className="indent">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button handler={() => {}} color="accent-2">More</Button>
                    </div>
                    
                </div>

                <div className="py-20 flex justify-between">
                    <div>
                        <h2 className="mb-8 text-center">H2 split left</h2>
                        <div className="indent">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                    <div className="ml-8">
                        <h2 className="mb-8 text-center">H2 split right</h2>
                        <div className="indent">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 px-8">
                <h2 className="mb-4">Form Input</h2>
                <Input value="Text input text" handler={() => {}} label="Fieldname"/>
            </div>

            <div className="mt-20 px-8">
                <h2 className="mb-4">Buttons</h2>
                <div className="flex justify-between">
                    <Button handler={() => {}} color="accent-1">CTA Button 1</Button>
                    <Button handler={() => {}} outline>Cancel Button</Button>
                    <Button handler={() => {}} color="accent-2">CTA Button 2</Button>
                </div>
            </div>

            <div className="mt-20 px-8">
                <h2 className="mb-4">Charts</h2>
                <ChartWrapper options={options} series={series} type="bar"/>
            </div>
        </div>
    );
}