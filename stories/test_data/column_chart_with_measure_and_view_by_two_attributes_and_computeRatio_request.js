// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        localIdentifier: "350381637b674c2eaa18d29ebf22c043",
                        definition: {
                            measure: {
                                item: { uri: "/gdc/md/" + projectId + "/obj/1279" },
                                computeRatio: true,
                            },
                        },
                        alias: "% Amount",
                        format: "#,##0.00%",
                    },
                ],
                attributes: [
                    {
                        displayForm: { uri: "/gdc/md/" + projectId + "/obj/952" },
                        localIdentifier: "f4213833c9244f63858b52686044f7aa",
                    },
                    {
                        displayForm: { uri: "/gdc/md/" + projectId + "/obj/1805" },
                        localIdentifier: "230215bcc2984abda7fefadac5379547",
                    },
                ],
            },
            resultSpec: {
                dimensions: [
                    { itemIdentifiers: ["measureGroup"] },
                    {
                        itemIdentifiers: [
                            "f4213833c9244f63858b52686044f7aa",
                            "230215bcc2984abda7fefadac5379547",
                        ],
                    },
                ],
                sorts: [],
            },
        },
    };
};
