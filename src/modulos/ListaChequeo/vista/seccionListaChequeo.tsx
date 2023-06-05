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
    valorSeccion
}) => {
    const classes = useStyles();
    const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandido(isExpanded ? panel : false);
    };

    return (

        <div>

            <Grid container>
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                    <Accordion expanded={expandido === panel} onChange={handleChange(panel)}>
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
                                        id={`lcs-${id}`}
                                        fullWidth
                                        required
                                        name="Sección"
                                        label="Sección"
                                        //onChange={handleTituloChange}
                                        variant="outlined"
                                        value={valorSeccion}
                                        onChange={alCambiarSeccion}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        id={`lcs-${id}`}
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
                </Grid>
            </Grid>
        </div>

    )
};

export default SeccionListaChequeoVista;