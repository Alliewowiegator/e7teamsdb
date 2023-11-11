import React, {useState} from "react";
import Container from "@mui/material/Container";
import CompPreviewModal from "../../components/CompPreviewModal";
import { useRouter } from "next/router";

const CompHyperlink = ({compData}) => {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const handleClose = () => router.push('/');
    return (
        <Container maxWidth="lg">
            <CompPreviewModal open={open} {...compData} handleClose={handleClose} />
        </Container>
    );
}

CompHyperlink.getInitialProps = async ({query}) => {
    const {id} = query;
    const res = await fetch("https://e7-teamsdb.netlify.app/api/allComps", {
        method: 'GET',
        headers: {service: 'compId', id: id}
    });
    const {data} = await res.json();
    return {compData: data};
};

export default CompHyperlink;