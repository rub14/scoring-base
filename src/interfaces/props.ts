
import { IResourceComponentsProps } from "@refinedev/core";

export interface IJudgingSession {
    competitionId: string,
    competitionName: string,
    classTypeId: string,
    classTypeName: string,
    classTestId: string
    classPhaseName: string
  };

/*export interface IClassTestView {
    phase_num: number,
    phase_name: string,
    competition_id: number,
    class_type_id: number,
    id: number,
    name: string,
    class_types_name: string,
    competition_name: string
  };*/

export interface IRiderTallyView {
  id: number,
  class_test_id: number,
  status: number,
  total_score: number,
  test_error: string,
  back_num: number,
  comp_class_id: number,
  rider_name: string,
  notes: string,
  phase_name: string,
  class_types_name: string,
  competition_name: string,
  movement_totals: number,
  collective_totals: number,
  deductions: number,
  max_score: number,
}

export interface IMovementList {
    class_test_id: number;
    id: number; //movement_id
    item_num: number;
    is_collective: boolean;
    description: string;
    directive: string;
    coeffient: number;
    max_value: number;
    allowed_increments: number;
    name: string;
    score_range_id: number;
    total_movements: number;
  }

export interface IRider {
  riderTestId: number,
  riderDetails: string
};

export interface IJudgingComponentProps extends IResourceComponentsProps {
  judgingSession: IJudgingSession
  rider?: IRider
};
  
export interface IJudgingScoringComponentProps extends IResourceComponentsProps {
  movement: IMovementList
  rider: IRider
  onScoreSaved: () => void
  onGoBack: () => void
};

interface xIJudgingScoringComponentProps extends IJudgingComponentProps {
  onScoreSaved: (arg: IJudgingSession) => void
};
  