import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import SyntaxCodeHandler from "../../components/Syntax/Code/SyntaxHandler";
import Head from "next/head";
import Details from "../../components/Elements/Page/Details";
import OutputSyntaxHandler from "../../components/Syntax/OutputSyntaxHandler";
import Notes from "../../components/Elements/Page/Notes";
import ExternalLink from "../../components/Elements/Page/ExternalLink";
import Footer from "../../components/Elements/Page/Footer";
import LoadingSNIPS from "../../components/LoadingState/LoadingSNIPS";

const Snippet = () => {
  const {
    query: { id },
  } = useRouter();

  const [snippet, setSnippet] = useState();
  const [loading, setLoading] = useState(true);

  const getSnippetData = async () => {
    const snippetDocref = doc(db, "CodeSnippetsData1", `${id}`);
    const snippetData = await getDoc(snippetDocref);
    setSnippet(snippetData.data());
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getSnippetData();
    }
  }, [id]);

  return (
    <div className="min-h-[70vh]">
      <Head>
        <title>{snippet?.title}&nbsp;- SNIPV</title>
        <meta name="description" content="Created by Peter G" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {snippet && (
        <div className="flex flex-col gap-4">
          <div className="flex-none">
            <Details snippet={snippet} />
          </div>
          <div className="flex-grow flex flex-col gap-4 min-h-[60vh]">
            <SyntaxCodeHandler snippet={snippet} />

            {snippet.output && <OutputSyntaxHandler snippet={snippet} />}

            {snippet.notes && <Notes snippet={snippet} />}

            {snippet.link && <ExternalLink snippet={snippet} />}
          </div>

          <div className="flex-none ">
            <Footer snippet={snippet} />
          </div>
        </div>
      )}

      {loading && <LoadingSNIPS size={10} />}
    </div>
  );
};

export default Snippet;
