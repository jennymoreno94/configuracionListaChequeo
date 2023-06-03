import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions,
    makeStyles,

} from '@material-ui/core';
import React, { useState } from 'react';
import { ISeccionListaChequeoProps } from '../interfaces';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    summary: {
        flexDirection: 'row-reverse',
        '& > .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    },
}));

const SeccionListaChequeoVista: React.FunctionComponent<ISeccionListaChequeoProps> = ({
    agregarSeccion,
    eliminarSeccion,
    panel,
    expanded,
    setExpanded,
    id
}) => {
    const classes = useStyles();
    //const [expanded, setExpanded] = useState<string | false>(panel);

    const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <div>

            <Grid container>
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                    <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary} aria-controls={`${panel}bh-content`} id={`${panel}bh-header`}>
                            <Typography variant="h6">{`Sección ${panel}`}</Typography>
                        </AccordionSummary>
                        <AccordionActions>
                            <Button
                                onClick={agregarSeccion}
                                color="secondary"
                                variant="contained"
                                size="small"
                            >
                                Duplicar Seccion
                            </Button>
                            <Button
                                 onClick={() => eliminarSeccion(id)}
                                color="secondary"
                                variant="contained"
                                size="small"
                            >
                                Eliminar
                            </Button>
                        </AccordionActions>
                        <AccordionDetails>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="Sección"
                                        label="Sección"
                                        //onChange={handleTituloChange}
                                        variant="outlined"
                                    //value={titulo}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        //onClick={agregarComponente}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"

                                    >
                                        Agregar Preguntas
                                    </Button>

                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography variant="h6">Sección</Typography>
                    <Grid container justifyContent="flex-end" xs={12} sm={12} >
                        <Button
                            onClick={agregarSeccion}
                            color="secondary"
                            variant="contained"
                            size="small"
                        >
                            Duplicar Seccion
                        </Button>

                    </Grid>

                </AccordionSummary>

                <AccordionDetails>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                name="Sección"
                                label="Sección"
                                //onChange={handleTituloChange}
                                variant="outlined"
                            //value={titulo}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                //onClick={agregarComponente}
                                color="secondary"
                                variant="contained"
                                size="medium"

                            >
                                Agregar Preguntas
                            </Button>

                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>*/}
                </Grid>
            </Grid>




            {/*<Grid container>
                <Grid item xs={12}>
                    <Card variant="outlined" style={{ marginTop: '30px' }}>
                        <Grid container spacing={2} style={{ margin: '2px 2px 2px 2px' }} justifyContent="center">
                            <Typography variant="h6">Sección</Typography>
                        </Grid>
                        <CardContent>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="Sección"
                                        label="Sección"
                                        //onChange={handleTituloChange}
                                        variant="outlined"
                                    //value={titulo}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        //onClick={agregarComponente}
                                        color="secondary"
                                        variant="contained"
                                        size="medium"

                                    >
                                        Agregar Preguntas
                                    </Button>

                                </Grid>
                            </Grid>


                        </CardContent>
                    </Card>
                </Grid>
            </Grid>*/}

        </div>

    )
};

export default SeccionListaChequeoVista;