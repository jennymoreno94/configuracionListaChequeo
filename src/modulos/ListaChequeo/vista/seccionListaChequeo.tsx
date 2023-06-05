import {
    Button,
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
import PreguntaListaChequeoVista from './preguntaListaChequeo';


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
    expandido,
    setExpandido,
    alCambiarSeccion,
    id,
    valorSeccion,
    agregarPregunta,
    componentePregunta
}) => {
    const classes = useStyles();
    const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandido(isExpanded ? panel : false);
    };

    return (
        <Grid container>
            <Grid item xs={12} style={{ marginTop: '20px' }}>
                <Accordion expanded={expandido === panel} onChange={handleChange(panel)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary} aria-controls={`${panel}bh-content`} id={`${panel}bh-header`}>
                        <Typography variant="h6">{`${valorSeccion} ${panel}`}</Typography>
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
                                    id={`lcs-${id}`}
                                    fullWidth
                                    required
                                    name="Sección"
                                    label="Sección"
                                    variant="outlined"
                                    value={valorSeccion}
                                    onChange={alCambiarSeccion}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    id={`lcs-${id}`}
                                    onClick={agregarPregunta}
                                    color="secondary"
                                    variant="contained"
                                    size="medium"
                                >
                                    Agregar Preguntas
                                </Button>

                            </Grid>
                        </Grid>



                    </AccordionDetails>
                    <AccordionDetails>
                        <Grid item xs={12} sm={12}>
                            {componentePregunta.map((elemento) => (
                                <PreguntaListaChequeoVista
                                    key={elemento?.id}
                                    id={elemento?.id} 
                                    eliminarPregunta={function (id: number): void {
                                        throw new Error('Function not implemented.');
                                    } } alCambiarPregunta={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                        throw new Error('Function not implemented.');
                                    } } valorPregunta={''} agregarPregunta={function (): void {
                                        throw new Error('Function not implemented.');
                                    } }                                   
                                     />
                            ))}
                        </Grid>

                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
};

export default SeccionListaChequeoVista;